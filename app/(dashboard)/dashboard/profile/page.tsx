import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, Mail, MapPin, Pencil } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata: Metadata = {
  title: "Profile | Tech Education Platform",
  description: "Manage your profile and account settings",
}

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and profile information</p>
        </div>

        <Separator />

        <div className="flex flex-col gap-8 md:flex-row">
          <Card className="md:w-1/3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your Profile</CardTitle>
                <Button size="sm" variant="ghost">
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
              <CardDescription>Your public profile information</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 text-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
              <div className="grid w-full max-w-sm grid-cols-1 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span>Joined January 2023</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/dashboard/settings">Account Settings</Link>
              </Button>
              <Button>Update Profile</Button>
            </CardFooter>
          </Card>

          <div className="flex-1 space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="learning">Learning</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue="Full Stack Developer with 5 years of experience in React, Node.js, and AWS. Passionate about learning new technologies and sharing knowledge with others."
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Social Profiles</CardTitle>
                    <CardDescription>Connect your social media accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input id="github" defaultValue="https://github.com/johndoe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input id="twitter" defaultValue="https://twitter.com/johndoe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue="https://linkedin.com/in/johndoe" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="learning" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Preferences</CardTitle>
                    <CardDescription>Customize your learning experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="interests">Interests</Label>
                      <Input id="interests" defaultValue="React, Node.js, AWS, TypeScript" />
                      <p className="text-xs text-muted-foreground">Separate with commas</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level</Label>
                      <select
                        id="experience"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        defaultValue="intermediate"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goals">Learning Goals</Label>
                      <Textarea
                        id="goals"
                        defaultValue="Master React and TypeScript, learn about microservices architecture, and improve my cloud skills."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certificates</CardTitle>
                    <CardDescription>Your earned certificates and achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "React Fundamentals",
                          date: "March 15, 2023",
                          id: "CERT-RF-2023-001",
                        },
                        {
                          title: "Advanced JavaScript",
                          date: "January 10, 2023",
                          id: "CERT-AJ-2023-042",
                        },
                        {
                          title: "Introduction to TypeScript",
                          date: "November 5, 2022",
                          id: "CERT-TS-2022-189",
                        },
                      ].map((cert, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <h4 className="font-medium">{cert.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              Issued: {cert.date} • ID: {cert.id}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Certificates
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password to keep your account secure</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Update Password</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted-foreground">
                          Protect your account with an additional security layer
                        </p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sessions</CardTitle>
                    <CardDescription>Manage your active sessions and devices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          device: "MacBook Pro",
                          location: "San Francisco, CA",
                          lastActive: "Active now",
                          browser: "Chrome 98.0.4758.102",
                        },
                        {
                          device: "iPhone 13",
                          location: "San Francisco, CA",
                          lastActive: "3 hours ago",
                          browser: "Safari 15.4",
                        },
                        {
                          device: "Windows PC",
                          location: "New York, NY",
                          lastActive: "2 days ago",
                          browser: "Firefox 97.0.1",
                        },
                      ].map((session, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <h4 className="font-medium">{session.device}</h4>
                            <p className="text-sm text-muted-foreground">
                              {session.location} • {session.lastActive}
                            </p>
                            <p className="text-xs text-muted-foreground">{session.browser}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            {i === 0 ? "Current" : "Logout"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Logout from All Devices
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
