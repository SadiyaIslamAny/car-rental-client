"use client"
import { FieldError, Input, Label, ListBox, TextField, Select, TextArea, Button, Card } from '@heroui/react';
import { useRouter } from 'next/navigation';


const AddCarPage = () => {
    const router = useRouter();
    const onSubmit = async(e) =>{
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const car = Object.fromEntries(formData.entries())
          console.log(car)


           const res = await  fetch("http://localhost:5000/cars",{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
          })

          const data = await res.json()
          console.log(data)

        if (data.insertedId) { 
            alert("Car Added Successfully!"); 
             router.push("/cars");
             }
    }



    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <Card className="rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">

      {/* Header */}
      <div className=" px-6 sm:px-10 py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#FF4C31] ">
          Add New Car
        </h1>

        <p className="mt-3 text-black  text-sm sm:text-base max-w-2xl mx-auto">
          Fill in the information below to list your vehicle for rent.
          Make sure every detail is accurate so customers can easily find
          and book your car.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="p-5 sm:p-8 lg:p-10 space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Car Name */}
          <TextField name="carName" isRequired>
            <Label className="font-semibold mb-2">
              Car Name
            </Label>

            <Input
              placeholder="Toyota Corolla"
              className="h-12 rounded-xl"
            />

            <FieldError />
          </TextField>

          {/* Daily Rent */}
          <TextField
            name="dailyRentPrice"
            type="number"
            isRequired
          >
            <Label className="font-semibold mb-2">
              Daily Rent Price ($)
            </Label>

            <Input
              type="number"
              placeholder="80"
              className="h-12 rounded-xl"
            />

            <FieldError />
          </TextField>

          {/* Car Type */}
          <Select
            name="carType"
            isRequired
            placeholder="Select Car Type"
          >
            <Label className="font-semibold mb-2">
              Car Type
            </Label>

            <Select.Trigger className="h-12 rounded-xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="SUV">SUV</ListBox.Item>
                <ListBox.Item id="Sedan">Sedan</ListBox.Item>
                <ListBox.Item id="Hatchback">Hatchback</ListBox.Item>
                <ListBox.Item id="Coupe">Coupe</ListBox.Item>
                <ListBox.Item id="Convertible">
                  Convertible
                </ListBox.Item>
                <ListBox.Item id="Luxury">
                  Luxury
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Seat */}
          <TextField
            name="seatCapacity"
            type="number"
            isRequired
          >
            <Label className="font-semibold mb-2">
              Seat Capacity
            </Label>

            <Input
              type="number"
              placeholder="5"
              className="h-12 rounded-xl"
            />

            <FieldError />
          </TextField>

          {/* Pickup */}
          <TextField
            name="pickupLocation"
            isRequired
          >
            <Label className="font-semibold mb-2">
              Pickup Location
            </Label>

            <Input
              placeholder="Dhaka Airport"
              className="h-12 rounded-xl"
            />

            <FieldError />
          </TextField>

          {/* Availability */}
          <Select
            name="availability"
            isRequired
            placeholder="Availability Status"
          >
            <Label className="font-semibold mb-2">
              Availability Status
            </Label>

            <Select.Trigger className="h-12 rounded-xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Available">
                  Available
                </ListBox.Item>

                <ListBox.Item id="Unavailable">
                  Unavailable
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField
              name="imageUrl"
              isRequired
            >
              <Label className="font-semibold mb-2">
                Image URL
              </Label>

              <Input
                type="url"
                placeholder="https://example.com/car.jpg"
                className="h-12 rounded-xl w-full"
              />

              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField
              name="description"
              isRequired
            >
              <Label className="font-semibold mb-2">
                Description
              </Label>

              <TextArea
                rows={6}
                placeholder="Write detailed information about the car..."
                className="rounded-2xl w-full"
              />

              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full h-14 rounded-xl bg-[#FF4C31] text-white text-lg font-semibold hover:scale-[1.02] transition-all duration-300"
        >
          Add Car
        </Button>
      </form>
    </Card>
  </div>
</div>
    );
};

export default AddCarPage;