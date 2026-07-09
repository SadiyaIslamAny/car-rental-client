"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const Delete = ({ car }) => {
  const { _id, carName } = car;
  const router = useRouter();

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token()
    try {
      const res = await fetch(`http://localhost:5000/cars/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete car");
      }

      const data = await res.json();
      console.log("Deleted:", data);

      router.push("/cars");
      router.refresh();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button variant="outline" className="text-rose-500 rounded-xl">
          <TrashBin />
          Delete
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete car permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{carName}</strong> and all
                of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default Delete;