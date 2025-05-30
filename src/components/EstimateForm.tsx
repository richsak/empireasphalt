"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  projectAddress: z.string().min(1, { message: "Project address is required" }),
  serviceNeeded: z.string().min(1, { message: "Service needed is required" }),
  timeline: z.string().min(1, { message: "Timeline is required" }),
  projectDetails: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface EstimateFormProps {
  onSubmitForm: (data: FormData) => void; // Callback for when the form is submitted
}

const EstimateForm = ({ onSubmitForm }: EstimateFormProps) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Use the passed onSubmitForm for submission logic
  const handleFormSubmit = (data: FormData) => {
    console.log("EstimateForm submitted:", data);
    onSubmitForm(data); 
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name <span className="text-yellow-500">*</span></Label>
          <Input id="firstName" {...register("firstName")} className="mt-1" />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name <span className="text-yellow-500">*</span></Label>
          <Input id="lastName" {...register("lastName")} className="mt-1" />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address <span className="text-yellow-500">*</span></Label>
          <Input id="email" type="email" {...register("email")} className="mt-1" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number <span className="text-yellow-500">*</span></Label>
          <Input id="phone" type="tel" {...register("phone")} className="mt-1" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      
      <div>
        <Label htmlFor="projectAddress" className="text-sm font-medium text-gray-700">Project Address <span className="text-yellow-500">*</span></Label>
        <Input id="projectAddress" {...register("projectAddress")} className="mt-1" />
        {errors.projectAddress && <p className="text-red-500 text-xs mt-1">{errors.projectAddress.message}</p>}
      </div>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="serviceNeeded" className="text-sm font-medium text-gray-700">Service Needed <span className="text-yellow-500">*</span></Label>
          <Controller
            name="serviceNeeded"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asphalt Paving">Asphalt Paving</SelectItem>
                  <SelectItem value="Driveway Paving">Driveway Paving</SelectItem>
                  <SelectItem value="Driveway Repair">Driveway Repair</SelectItem>
                  <SelectItem value="Parking Lot Paving">Parking Lot Paving</SelectItem>
                  <SelectItem value="Parking Lot Maintenance">Parking Lot Maintenance</SelectItem>
                  <SelectItem value="Asphalt Resurfacing">Asphalt Resurfacing</SelectItem>
                  <SelectItem value="Asphalt Milling">Asphalt Milling</SelectItem>
                  <SelectItem value="Sports Court Paving">Sports Court Paving</SelectItem>
                  <SelectItem value="Road Paving">Road Paving</SelectItem>
                  <SelectItem value="Sealcoating">Sealcoating</SelectItem>
                  <SelectItem value="Crack Sealing & Filling">Crack Sealing & Filling</SelectItem>
                  <SelectItem value="Site Preparation & Base Work">Site Preparation & Base Work</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.serviceNeeded && <p className="text-red-500 text-xs mt-1">{errors.serviceNeeded.message}</p>}
        </div>

        <div>
          <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">Timeline <span className="text-yellow-500">*</span></Label>
            <Controller
            name="timeline"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASAP">ASAP</SelectItem>
                  <SelectItem value="Within 1 Month">Within 1 Month</SelectItem>
                  <SelectItem value="1-3 Months">1-3 Months</SelectItem>
                  <SelectItem value="3-6 Months">3-6 Months</SelectItem>
                  <SelectItem value="Just Exploring Options">Just Exploring Options</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="projectDetails" className="text-sm font-medium text-gray-700">Project Details</Label>
        <Textarea id="projectDetails" {...register("projectDetails")} rows={4} className="mt-1" placeholder="Please describe your project, including approximate size and any specific requirements..." />
        {errors.projectDetails && <p className="text-red-500 text-xs mt-1">{errors.projectDetails.message}</p>}
      </div>

      <div>
        <Button type="submit" size="lg" className="w-full bg-yellow-400 text-primary hover:bg-yellow-500 font-semibold">
          Get My Free Estimate
        </Button>
      </div>
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted by Empire Asphalt Paving regarding your project.
      </p>
    </form>
  );
};

export default EstimateForm;