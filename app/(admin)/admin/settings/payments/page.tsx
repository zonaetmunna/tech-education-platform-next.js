import type { Metadata } from "next"
import { CreditCard, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Payment Settings | Tech Education Platform",
  description: "Configure payment and subscription settings",
}

export default function PaymentSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payment Settings</h1>
        <p className="text-muted-foreground">Configure payment providers and subscription settings</p>
      </div>

      <Tabs defaultValue="providers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="providers">Payment Providers</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscription Plans</TabsTrigger>
          <TabsTrigger value="taxes">Taxes & Fees</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>
        <TabsContent value="providers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Providers</CardTitle>
              <CardDescription>Configure payment gateway integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Stripe</h3>
                      <p className="text-sm text-muted-foreground">Process credit card payments via Stripe</p>
                    </div>
                  </div>
                  <Switch id="stripe-enabled" defaultChecked />
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="stripe-public-key">Stripe Public Key</Label>
                      <Input id="stripe-public-key" defaultValue="pk_test_..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stripe-secret-key">Stripe Secret Key</Label>
                      <Input id="stripe-secret-key" type="password" defaultValue="sk_test_..." />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="stripe-test-mode" defaultChecked />
                    <Label htmlFor="stripe-test-mode">Test Mode</Label>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">PayPal</h3>
                      <p className="text-sm text-muted-foreground">Accept payments via PayPal</p>
                    </div>
                  </div>
                  <Switch id="paypal-enabled" />
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="paypal-client-id">PayPal Client ID</Label>
                      <Input id="paypal-client-id" placeholder="Enter PayPal Client ID" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paypal-secret">PayPal Secret</Label>
                      <Input id="paypal-secret" type="password" placeholder="Enter PayPal Secret" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="paypal-test-mode" defaultChecked />
                    <Label htmlFor="paypal-test-mode">Sandbox Mode</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plans</CardTitle>
              <CardDescription>Configure subscription plans and pricing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Premium Monthly</h3>
                    <p className="text-sm text-muted-foreground">Monthly subscription plan</p>
                  </div>
                  <Switch id="monthly-enabled" defaultChecked />
                </div>
                <Separator className="my-4" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="monthly-price">Price</Label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                        $
                      </span>
                      <Input id="monthly-price" className="rounded-l-none" defaultValue="9.99" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthly-trial">Trial Period (Days)</Label>
                    <Input id="monthly-trial" type="number" defaultValue="7" />
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Premium Yearly</h3>
                    <p className="text-sm text-muted-foreground">Annual subscription plan</p>
                  </div>
                  <Switch id="yearly-enabled" defaultChecked />
                </div>
                <Separator className="my-4" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="yearly-price">Price</Label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                        $
                      </span>
                      <Input id="yearly-price" className="rounded-l-none" defaultValue="99.00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearly-trial">Trial Period (Days)</Label>
                    <Input id="yearly-trial" type="number" defaultValue="14" />
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Add New Plan
              </Button>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
