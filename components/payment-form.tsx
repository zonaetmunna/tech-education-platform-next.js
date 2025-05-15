"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, CreditCard, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$19.99",
    description: "Billed monthly",
    features: ["Access to all courses", "Unlimited video streaming", "Downloadable resources", "Community access"],
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "$199.99",
    description: "Billed yearly (Save 17%)",
    features: ["All monthly features", "Priority support", "Early access to new content", "Exclusive webinars"],
  },
]

export function PaymentForm() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState("monthly")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard?subscription=success")
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Choose your subscription plan</CardTitle>
          <CardDescription>Select the plan that works best for you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
            {plans.map((plan) => (
              <div key={plan.id} className="flex">
                <div className="flex items-center h-5 mr-3">
                  <RadioGroupItem value={plan.id} id={plan.id} />
                </div>
                <div className="flex flex-col w-full">
                  <Label htmlFor={plan.id} className="flex justify-between font-medium cursor-pointer">
                    {plan.name}
                    <span className="font-bold">{plan.price}</span>
                  </Label>
                  <span className="text-sm text-muted-foreground">{plan.description}</span>
                  <div className="mt-2 space-y-1">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>

          <Separator />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Subscribe Now
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
