"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EstimateForm() {
  return (
    <Card className="w-full max-w-2xl bg-white rounded-lg shadow-lg mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold text-blue-600">Request Your Free Estimate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-6">
          {/* First row - First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-700 font-medium">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input id="firstName" type="text" className="border-gray-300 rounded-md" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-700 font-medium">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input id="lastName" type="text" className="border-gray-300 rounded-md" required />
            </div>
          </div>

          {/* Second row - Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" className="border-gray-300 rounded-md" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input id="phone" type="tel" className="border-gray-300 rounded-md" required />
            </div>
          </div>

          {/* Project Address */}
          <div className="space-y-2">
            <Label htmlFor="projectAddress" className="text-gray-700 font-medium">
              Project Address
            </Label>
            <Input id="projectAddress" type="text" className="border-gray-300 rounded-md" />
          </div>

          {/* Service Needed and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serviceNeeded" className="text-gray-700 font-medium">
                Service Needed
              </Label>
              <Select>
                <SelectTrigger className="border-gray-300 rounded-md">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asphalt-paving">Asphalt Paving</SelectItem>
                  <SelectItem value="driveway-paving">Driveway Paving</SelectItem>
                  <SelectItem value="driveway-repair">Driveway Repair</SelectItem>
                  <SelectItem value="parking-lot-paving">Parking Lot Paving</SelectItem>
                  <SelectItem value="parking-lot-maintenance">Parking Lot Maintenance</SelectItem>
                  <SelectItem value="asphalt-resurfacing">Asphalt Resurfacing</SelectItem>
                  <SelectItem value="asphalt-milling">Asphalt Milling</SelectItem>
                  <SelectItem value="sports-court-paving">Sports Court Paving</SelectItem>
                  <SelectItem value="road-paving">Road Paving</SelectItem>
                  <SelectItem value="sealcoating">Sealcoating</SelectItem>
                  <SelectItem value="crack-sealing-filling">Crack Sealing & Filling</SelectItem>
                  <SelectItem value="site-preparation-base-work">Site Preparation & Base Work</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-gray-700 font-medium">
                Timeline
              </Label>
              <Select>
                <SelectTrigger className="border-gray-300 rounded-md">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="within-1-month">Within 1 Month</SelectItem>
                  <SelectItem value="1-3-months">1-3 Months</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months</SelectItem>
                  <SelectItem value="just-exploring">Just Exploring Options</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label htmlFor="projectDetails" className="text-gray-700 font-medium">
              Project Details
            </Label>
            <Textarea
              id="projectDetails"
              placeholder="Please describe your project, including approximate size and any specific requirements..."
              className="border-gray-300 rounded-md min-h-[120px] resize-none"
              rows={5}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 text-lg rounded-md"
          >
            Get My Free Estimate
          </Button>

          {/* Disclaimer */}
          <p className="text-center text-sm text-gray-600 leading-relaxed">
            By submitting this form, you agree to be contacted by Empire Asphalt Paving regarding your project.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
