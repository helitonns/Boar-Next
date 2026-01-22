import { Modal } from "@/components/modal";
import { DialogTitle } from "@radix-ui/react-dialog";
import { BackButton } from "./back-button";

export default function IssueModal() {

  return (
    <Modal>
      <div className="flex flex-col gap-4 p-6">
        <BackButton />
        <DialogTitle className="sr-only">Issue details</DialogTitle>
      </div>
    </Modal>
  );
}