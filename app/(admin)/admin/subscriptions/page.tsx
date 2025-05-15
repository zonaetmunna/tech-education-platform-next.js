import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, CreditCard, Download, Filter, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Subscription Management | Tech Education Platform",
  description: "Manage all subscriptions on the platform",
}

export default function SubscriptionManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscription Management</h1>
          <p className="text-muted-foreground">Manage all subscriptions and payment plans</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/subscriptions/export">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/subscriptions/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Plan
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,456</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+5%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">-0.5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search subscriptions..." className="w-full pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="active" className="mr-2" />
                <label htmlFor="active">Active</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="canceled" className="mr-2" />
                <label htmlFor="canceled">Canceled</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="expired" className="mr-2" />
                <label htmlFor="expired">Expired</label>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Plan</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="monthly" className="mr-2" />
                <label htmlFor="monthly">Monthly</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="yearly" className="mr-2" />
                <label htmlFor="yearly">Yearly</label>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Newest First</DropdownMenuItem>
              <DropdownMenuItem>Oldest First</DropdownMenuItem>
              <DropdownMenuItem>Amount (High to Low)</DropdownMenuItem>
              <DropdownMenuItem>Amount (Low to High)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle>All Subscriptions</CardTitle>
            <div className="text-sm text-muted-foreground">Showing 10 of 3,156 subscriptions</div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox id="select-all" />
                </TableHead>
                <TableHead>User</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Next Billing</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  user: "Emma Wilson",
                  email: "emma.wilson@example.com",
                  plan: "Premium Yearly",
                  status: "Active",
                  startDate: "Apr 15, 2025",
                  nextBilling: "Apr 15, 2026",
                  amount: "$99.00",
                },
                {
                  user: "James Rodriguez",
                  email: "james.r@example.com",
                  plan: "Premium Monthly",
                  status: "Active",
                  startDate: "Apr 10, 2025",
                  nextBilling: "May 10, 2025",
                  amount: "$9.99",
                },
                {
                  user: "Sophia Chen",
                  email: "sophia.chen@example.com",
                  plan: "Premium Yearly",
                  status: "Active",
                  startDate: "Apr 5, 2025",
                  nextBilling: "Apr 5, 2026",
                  amount: "$99.00",
                },
                {
                  user: "Marcus Johnson",
                  email: "marcus.j@example.com",
                  plan: "Premium Monthly",
                  status: "Canceled",
                  startDate: "Mar 20, 2025",
                  nextBilling: "Apr 20, 2025",
                  amount: "$9.99",
                },
                {
                  user: "Lisa Thompson",
                  email: "lisa.t@example.com",
                  plan: "Premium Yearly",
                  status: "Active",
                  startDate: "Mar 15, 2025",
                  nextBilling: "Mar 15, 2026",
                  amount: "$99.00",
                },
                {
                  user: "Robert Chen",
                  email: "robert.c@example.com",
                  plan: "Premium Monthly",
                  status: "Active",
                  startDate: "Mar 10, 2025",
                  nextBilling: "Apr 10, 2025",
                  amount: "$9.99",
                },
                {
                  user: "Maria Garcia",
                  email: "maria.g@example.com",
                  plan: "Premium Yearly",
                  status: "Expired",
                  startDate: "Mar 5, 2024",
                  nextBilling: "Mar 5, 2025",
                  amount: "$99.00",
                },
                {
                  user: "David Wilson",
                  email: "david.wilson@example.com",
                  plan: "Premium Monthly",
                  status: "Active",
                  startDate: "Mar 1, 2025",
                  nextBilling: "Apr 1, 2025",
                  amount: "$9.99",
                },
                {
                  user: "Sarah Johnson",
                  email: "sarah.johnson@example.com",
                  plan: "Premium Yearly",
                  status: "Active",
                  startDate: "Feb 25, 2025",
                  nextBilling: "Feb 25, 2026",
                  amount: "$99.00",
                },
                {
                  user: "Michael Chen",
                  email: "michael.chen@example.com",
                  plan: "Premium Monthly",
                  status: "Active",
                  startDate: "Feb 20, 2025",
                  nextBilling: "Mar 20, 2025",
                  amount: "$9.99",
                },
              ].map((subscription, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox id={`select-${i}`} />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{subscription.user}</div>
                    <div className="text-xs text-muted-foreground">{subscription.email}</div>
                  </TableCell>
                  <TableCell>{subscription.plan}</TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        subscription.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : subscription.status === "Canceled"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {subscription.status}
                    </div>
                  </TableCell>
                  <TableCell>{subscription.startDate}</TableCell>
                  <TableCell>{subscription.nextBilling}</TableCell>
                  <TableCell>{subscription.amount}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Subscription</DropdownMenuItem>
                        <DropdownMenuItem>View Payment History</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Cancel Subscription
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <div className="text-sm text-muted-foreground">Page 1 of 316</div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
