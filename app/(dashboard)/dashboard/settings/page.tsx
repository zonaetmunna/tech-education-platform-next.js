import type { Metadata } from "next"
import { Bell, CreditCard, Globe, Lock, Mail, Moon, Sun, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata: Metadata = {
  title: "Settings | Tech Education Platform",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <Separator />

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">
              <Globe className="mr-2 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Sun className="mr-2 h-4 w-4" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="subscription">
              <CreditCard className="mr-2 h-4 w-4" />
              Subscription
            </TabsTrigger>
            <TabsTrigger value="account">
              <User className="mr-2 h-4 w-4" />
              Account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your general account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="language">Language</Label>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                  <select
                    id="language"
                    className="w-[180px] rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="en"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="ja">Japanese</option>
                    <option value="zh">Chinese</option>
                  </select>
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="timezone">Timezone</Label>
                    <p className="text-sm text-muted-foreground">Set your local timezone</p>
                  </div>
                  <select
                    id="timezone"
                    className="w-[180px] rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="America/Los_Angeles"
                  >
                    <option value="America/Los_Angeles">Pacific Time (US)</option>
                    <option value="America/New_York">Eastern Time (US)</option>
                    <option value="Europe/London">London</option>
                    <option value="Europe/Paris">Paris</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                    <option value="Australia/Sydney">Sydney</option>
                  </select>
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label>Auto-play videos</Label>
                    <p className="text-sm text-muted-foreground">Automatically play videos when browsing</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label>Show progress on dashboard</Label>
                    <p className="text-sm text-muted-foreground">Display your learning progress on the dashboard</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Preferences</CardTitle>
                <CardDescription>Customize your learning experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label>Show subtitles by default</Label>
                    <p className="text-sm text-muted-foreground">Automatically enable subtitles for videos</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label>Enable keyboard shortcuts</Label>
                    <p className="text-sm text-muted-foreground">Use keyboard shortcuts for video playback</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="playback-speed">Default playback speed</Label>
                    <p className="text-sm text-muted-foreground">Set your preferred video playback speed</p>
                  </div>
                  <select
                    id="playback-speed"
                    className="w-[180px] rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="1"
                  >
                    <option value="0.5">0.5x</option>
                    <option value="0.75">0.75x</option>
                    <option value="1">1x (Normal)</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="1.75">1.75x</option>
                    <option value="2">2x</option>
                  </select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how the platform looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-primary bg-background">
                          <Sun className="h-6 w-6" />
                        </div>
                        <span className="text-sm">Light</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-muted bg-background dark:bg-muted">
                          <Moon className="h-6 w-6" />
                        </div>
                        <span className="text-sm">Dark</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-muted bg-background">
                          <div className="flex h-full w-full">
                            <div className="h-full w-1/2 bg-background"></div>
                            <div className="h-full w-1/2 bg-muted"></div>
                          </div>
                        </div>
                        <span className="text-sm">System</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Font Size</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm">
                        Small
                      </Button>
                      <Button variant="default" size="sm">
                        Medium
                      </Button>
                      <Button variant="outline" size="sm">
                        Large
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>Reduce animations</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations for better performance</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="space-y-0.5">
                      <Label>High contrast mode</Label>
                      <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    {[
                      {
                        title: "New course releases",
                        description: "Get notified when new courses are released",
                      },
                      {
                        title: "Course updates",
                        description: "Receive updates for courses you're enrolled in",
                      },
                      {
                        title: "Weekly newsletter",
                        description: "Weekly digest of new content and platform updates",
                      },
                      {
                        title: "Special offers",
                        description: "Promotions, discounts, and special offers",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between space-x-2">
                        <div className="space-y-0.5">
                          <Label>{item.title}</Label>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Switch defaultChecked={i < 2} />
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <h3 className="text-lg font-medium">Push Notifications</h3>
                  <div className="space-y-2">
                    {[
                      {
                        title: "Learning reminders",
                        description: "Reminders to continue your learning",
                      },
                      {
                        title: "New comments",
                        description: "When someone replies to your comment",
                      },
                      {
                        title: "Achievement unlocked",
                        description: "When you earn a new certificate or badge",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between space-x-2">
                        <div className="space-y-0.5">
                          <Label>{item.title}</Label>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Switch defaultChecked={i !== 1} />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Premium Plan</h3>
                      <p className="text-sm text-muted-foreground">$15.99/month • Renews on May 15, 2025</p>
                      <div className="mt-2 flex items-center">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                          Active
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Change Plan
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Payment Method</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-md bg-muted p-2">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Add Payment Method
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  <div className="rounded-lg border">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                      <div>Date</div>
                      <div>Amount</div>
                      <div>Status</div>
                      <div className="text-right">Invoice</div>
                    </div>
                    <Separator />
                    {[
                      {
                        date: "Apr 15, 2025",
                        amount: "$15.99",
                        status: "Paid",
                      },
                      {
                        date: "Mar 15, 2025",
                        amount: "$15.99",
                        status: "Paid",
                      },
                      {
                        date: "Feb 15, 2025",
                        amount: "$15.99",
                        status: "Paid",
                      },
                    ].map((invoice, i) => (
                      <div key={i} className="grid grid-cols-4 gap-4 p-4 text-sm">
                        <div>{invoice.date}</div>
                        <div>{invoice.amount}</div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                            {invoice.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel Subscription</Button>
                <Button>Update Billing Info</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information and security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Email Address</h3>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-md bg-muted p-2">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">john.doe@example.com</p>
                      <p className="text-sm text-muted-foreground">Your primary email address</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Password</h3>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-md bg-muted p-2">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Password</p>
                      <p className="text-sm text-muted-foreground">Last updated 3 months ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-md bg-muted p-2">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Not Enabled</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Delete Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all of your content
                  </p>
                  <Button variant="destructive" size="sm">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
