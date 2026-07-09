"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { BiEdit } from "react-icons/bi";


const EditModal =({ car }) => {
  
const { _id, imageUrl, carName, dailyRentPrice, carType, seatCapacity, pickupLocation, availability,description } = car;


        const onSubmit = async(e) =>{
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const car = Object.fromEntries(formData.entries())
         const { data: tokenData } = await authClient.token()
        const res = await fetch(`http://localhost:5000/cars/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                  authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(car)
        })

        const data = await res.json()
        console.log(data)
    }
    return (

        <Modal>
  <Button variant="outline" className="rounded-xl p-4">
    <BiEdit /> Update
  </Button>

  <Modal.Backdrop>
    <Modal.Container placement="auto">
      <Modal.Dialog className="sm:max-w-xl">
        <Modal.CloseTrigger />

        <Modal.Header>
          <Modal.Heading>Edit Car</Modal.Heading>
        </Modal.Header>

        <Modal.Body className="p-6">
          <Surface variant="default">
            <form
              onSubmit={onSubmit}
              className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#FF4C31]">
                  Update Car
                </h2>

                <p className="text-gray-500 mt-2">
                  Update your car information.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <TextField name="carName" defaultValue={carName} isRequired>
                  <Label className="font-semibold mb-2">
                    Car Name
                  </Label>
                  <Input
                    placeholder="Toyota Corolla"
                    className="rounded-xl h-12"
                  />
                  <FieldError />
                </TextField>

                <TextField
                  name="dailyRentPrice"
                  type="number"
                  defaultValue={dailyRentPrice}
                  isRequired
                >
                  <Label className="font-semibold mb-2">
                    Daily Rent Price ($)
                  </Label>
                  <Input
                    placeholder="80"
                    className="rounded-xl h-12"
                  />
                  <FieldError />
                </TextField>

            
                <Select
                  name="carType"
                  defaultSelectedKeys={[carType]}
                  isRequired
                  className="w-full"
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
                      <ListBox.Item id="Convertible">
                        Convertible
                      </ListBox.Item>
                      <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <TextField
                  name="seatCapacity"
                  type="number"
                  defaultValue={seatCapacity}
                  isRequired
                >
                  <Label className="font-semibold mb-2">
                    Seat Capacity
                  </Label>

                  <Input
                    placeholder="5"
                    className="rounded-xl h-12"
                  />
                  <FieldError />
                </TextField>
                <TextField
                  name="pickupLocation"
                  defaultValue={pickupLocation}
                  isRequired
                >
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
                  defaultSelectedKeys={[availability]}
                  isRequired
                  className="w-full"
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
                  <TextField
                    name="imageUrl"
                    defaultValue={imageUrl}
                    isRequired
                  >
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
                  <TextField
                    name="description"
                    defaultValue={description}
                    isRequired
                  >
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
                Update Car
              </Button>
            </form>
          </Surface>
        </Modal.Body>
      </Modal.Dialog>
    </Modal.Container>
  </Modal.Backdrop>
</Modal>
    );
}

export default EditModal;
