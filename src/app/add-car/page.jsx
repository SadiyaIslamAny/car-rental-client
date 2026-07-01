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
        <div>

            
                <form onSubmit={onSubmit} className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#FF4C31]">
                            Add New Car
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Fill in the details to add a new rental car.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField name="carName" isRequired>
                            <Label className="font-semibold mb-2">
                                Car Name
                            </Label>
                            <Input
                                placeholder="Toyota Corolla"
                                className="rounded-xl h-12"
                            />
                            <FieldError />
                        </TextField>
                        <TextField name="dailyRentPrice" type="number" isRequired>
                            <Label className="font-semibold mb-2">
                                Daily Rent Price ($)
                            </Label>
                            <Input
                                type="number"
                                placeholder="80"
                                className="rounded-xl h-12"
                            />
                            <FieldError />
                        </TextField>
                        <Select
                            name="carType"
                            isRequired
                            className="w-full"
                            placeholder="Select Car Type"
                        >
                            <Label className="font-semibold mb-2">
                                Car Type
                            </Label>

                            <Select.Trigger className="rounded-xl h-12">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="SUV">SUV</ListBox.Item>
                                    <ListBox.Item id="Sedan">Sedan</ListBox.Item>
                                    <ListBox.Item id="Hatchback">Hatchback</ListBox.Item>
                                    <ListBox.Item id="Coupe">Coupe</ListBox.Item>
                                    <ListBox.Item id="Convertible">Convertible</ListBox.Item>
                                    <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <TextField name="seatCapacity" type="number" isRequired>
                            <Label className="font-semibold mb-2">
                                Seat Capacity
                            </Label>
                            <Input
                                type="number"
                                placeholder="5"
                                className="rounded-xl h-12"
                            />
                            <FieldError />
                        </TextField>
                        <TextField name="pickupLocation" isRequired>
                            <Label className="font-semibold mb-2">
                                Pickup Location
                            </Label>
                            <Input
                                placeholder="Dhaka Airport"
                                className="rounded-xl h-12"
                            />
                            <FieldError />
                        </TextField>

                        <Select
                            name="availability"
                            isRequired
                            className="w-full"
                            placeholder="Availability Status"
                        >
                            <Label className="font-semibold mb-2">
                                Availability Status
                            </Label>

                            <Select.Trigger className="rounded-xl h-12">
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

                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label className="font-semibold mb-2">
                                    Image URL
                                </Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/car.jpg"
                                    className="rounded-xl h-12"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label className="font-semibold mb-2">
                                    Description
                                </Label>
                                <TextArea
                                    rows={5}
                                    placeholder="Write car details..."
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                    </div>
                    <Button
                        type="submit"
                        className="w-full h-14 rounded-xl bg-[#FF4C31] text-white text-lg font-semibold"
                    >
                        Add Car
                    </Button>

                </form>
            


        </div>
    );
};

export default AddCarPage;