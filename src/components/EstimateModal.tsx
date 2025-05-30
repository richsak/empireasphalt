"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EstimateForm from "@/components/EstimateForm";
import { useModal } from "@/contexts/ModalContext";

const EstimateModal = () => {
  const { isEstimateModalOpen, closeEstimateModal } = useModal();

  const handleFormSubmit = (data: any) => {
    console.log("Modal Form Submitted:", data);
    // Potentially close modal after submission or show a success message
    closeEstimateModal(); 
  };

  return (
    <Dialog open={isEstimateModalOpen} onOpenChange={(isOpen: boolean) => {
      if (!isOpen) {
        closeEstimateModal();
      }
    }}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary text-center">Request Your Free Estimate</DialogTitle>
          <DialogDescription className="text-center"> {/* Also centering description for consistency */}
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <EstimateForm onSubmitForm={handleFormSubmit} />
        </div>
        {/* DialogFooter can be used if we need explicit close buttons, but form submission handles it */}
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default EstimateModal;