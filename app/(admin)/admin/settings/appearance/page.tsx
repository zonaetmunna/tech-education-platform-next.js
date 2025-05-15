import type { Metadata } from "next"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = {
  title: "Appearance Settings | Tech Education Platform",
  description: "Configure platform appearance and branding",
}

export default function AppearanceSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Appearance Settings</h1>
        <p className="text-muted-foreground">Configure platform appearance and branding</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Branding</CardTitle>
          <CardDescription>Configure your platform's branding elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Logo</Label>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-md border bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Logo</span>
              </div>
              <Button variant="outline">Upload New Logo</Button>
            </div>
            <p className="text-xs text-muted-foreground">Recommended size: 200x200px. Max file size: 2MB.</p>
          </div>
          <div className="space-y-2">
            <Label>Favicon</Label>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md border bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-xs">Icon</span>
              </div>
              <Button variant="outline">Upload New Favicon</Button>
            </div>
            <p className="text-xs text-muted-foreground">Recommended size: 32x32px. Max file size: 1MB.</p>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="primary-color">Primary Color</Label>
            <div className="flex items-center gap-2">
              <Input id="primary-color" type="color" defaultValue="#0070f3" className="w-16 h-10" />
              <Input defaultValue="#0070f3" className="w-32" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondary-color">Secondary Color</Label>
            <div className="flex items-center gap-2">
              <Input id="secondary-color" type="color" defaultValue="#6941C6" className="w-16 h-10" />
              <Input defaultValue="#6941C6" className="w-32" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="accent-color">Accent Color</Label>
            <div className="flex items-center gap-2">
              <Input id="accent-color" type="color" defaultValue="#10B981" className="w-16 h-10" />
              <Input defaultValue="#10B981" className="w-32" />
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

      <Card>
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
          <CardDescription>Configure theme and appearance preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Default Theme</Label>
            <RadioGroup defaultValue="system" className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="theme-light" />
                <Label htmlFor="theme-light">Light</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="theme-dark" />
                <Label htmlFor="theme-dark">Dark</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="theme-system" />
                <Label htmlFor="theme-system">System</Label>
              </div>
            </RadioGroup>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="theme-toggle" className="flex flex-col space-y-1">
              <span>Allow Theme Toggle</span>
              <span className="font-normal text-xs text-muted-foreground">
                Let users switch between light and dark mode
              </span>
            </Label>
            <Switch id="theme-toggle" defaultChecked />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label>Font Family</Label>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue="inter"
            >
              <option value="inter">Inter</option>
              <option value="roboto">Roboto</option>
              <option value="opensans">Open Sans</option>
              <option value="montserrat">Montserrat</option>
              <option value="poppins">Poppins</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Border Radius</Label>
            <RadioGroup defaultValue="medium" className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="radius-none" />
                <Label htmlFor="radius-none">None</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="radius-small" />
                <Label htmlFor="radius-small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="radius-medium" />
                <Label htmlFor="radius-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="radius-large" />
                <Label htmlFor="radius-large">Large</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Layout Settings</CardTitle>
          <CardDescription>Configure platform layout preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sidebar-collapsed" className="flex flex-col space-y-1">
              <span>Default Collapsed Sidebar</span>
              <span className="font-normal text-xs text-muted-foreground">Start with sidebar collapsed by default</span>
            </Label>
            <Switch id="sidebar-collapsed" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="sticky-header" className="flex flex-col space-y-1">
              <span>Sticky Header</span>
              <span className="font-normal text-xs text-muted-foreground">Keep header visible when scrolling</span>
            </Label>
            <Switch id="sticky-header" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="content-width" className="flex flex-col space-y-1">
              <span>Content Width</span>
              <span className="font-normal text-xs text-muted-foreground">Maximum width for content areas</span>
            </Label>
            <select
              id="content-width"
              className="w-40 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue="default"
            >
              <option value="narrow">Narrow</option>
              <option value="default">Default</option>
              <option value="wide">Wide</option>
              <option value="full">Full Width</option>
            </select>
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
