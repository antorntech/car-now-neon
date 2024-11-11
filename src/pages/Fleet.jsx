import { useContext, useEffect, useState } from "react";
import useGetData, { baseURL } from "../hooks/useGetData";
import FleetHero from "../components/fleet/FleetHero";
import FleetForm from "../components/fleet/FleetForm";
import FleetFilters from "../components/fleet/FleetFilters";
import FleetCars from "../components/fleet/FleetCars";
import FAQ from "../components/faq/Faq";
import LongTermForm from "../components/LongTermForm/LongTermForm";
import { ContextAvailablity } from "../context/Availability";

const Fleet = () => {
  // const { data, loading, error } = useGetData("fleets");
  const { data: locations } = useGetData("locations");
  const { state } = useContext(ContextAvailablity);
  const formDataToBind = state.formData || {};
  const [data, setData] = useState(null);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: null,
    dropoffDate: null
  });

  useEffect(() => {
    if (state.formData) {
      setFormData(formDataToBind);
    }

    if (!state.data) {
      fetch(baseURL + "fleets")
        .then((res) => res.json())
        .then(({ data }) => {
          setData(data);
        })
        .catch(console.error);
    } else {
      setData(state.data);
    }
  }, [state]);

  const [filters, setFilters] = useState({
    type: [],
    passengers: [],
    transmission: "",
    doors: []
  });

  const [filteredCars, setFilteredCars] = useState(data);

  useEffect(() => {
    if (data) {
      setFilteredCars(data);
    }
  }, [data]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFilters((prevFilters) => {
        const updatedFilter = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value);

        return { ...prevFilters, [name]: updatedFilter };
      });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      passengers: [],
      transmission: "",
      doors: []
    });
    setFilteredCars(data);
  };

  const filterCars = () => {
    let filtered = data;

    if (filters.type.length > 0) {
      filtered = filtered.filter((car) => filters.type.includes(car.type));
    }

    if (filters.passengers.length > 0) {
      filtered = filtered.filter((car) => {
        return filters.passengers.some((seatFilter) => {
          if (
            seatFilter === "2-5 passengers" &&
            car.passengers >= 2 &&
            car.passengers <= 5
          ) {
            return true;
          }
          if (seatFilter === "6+ passengers" && car.passengers > 5) {
            return true;
          }
          return false;
        });
      });
    }

    if (filters.transmission) {
      filtered = filtered.filter(
        (car) => car.transmission === filters.transmission
      );
    }

    if (filters.doors.length > 0) {
      filtered = filtered.filter((car) =>
        filters.doors.includes(`${car.doors} Doors`)
      );
    }

    setFilteredCars(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterCars();
    setFormData({
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: null,
      dropoffDate: null
    });
  };

  return (
    <div className="p-5 flex gap-5 flex-wrap lg:flex-nowrap">
      <div className="min-w-[320px] flex-grow">
        <FleetFilters
          filters={filters}
          handleFilterChange={handleFilterChange}
          clearFilters={clearFilters}
          filterCars={filterCars}
          className="sticky top-4"
        />
      </div>
      <div className="flex-grow">
        <div className="w-full md:col-start-3 order-1 md:order-2">
          <FleetHero />
          <FleetForm
            formData={formData}
            handleFormChange={handleFormChange}
            locations={locations}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="w-full order-2 md:order-1"></div>
        <div className="w-full md:col-start-3 order-1 md:order-2">
          <FleetCars cars={filteredCars} />
          {/* FAQ */}
          <div className="my-5 md:my-10">
            <FAQ />
          </div>

          {/* Long Term Form */}
          <div className="mb-12">
            <LongTermForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
