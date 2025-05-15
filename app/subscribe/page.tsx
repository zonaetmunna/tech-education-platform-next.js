import type { Metadata } from "next"

import { PaymentForm } from "@/components/payment-form"

export const metadata: Metadata = {
  title: "Subscribe | Tech Academy",
  description: "Subscribe to Tech Academy to access premium content and features",
}

export default function SubscribePage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Unlock Premium Learning Experience</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Subscribe to Tech Academy to get unlimited access to all courses, videos, and exclusive content to accelerate
          your learning journey.
        </p>
      </div>

      <PaymentForm />

      <div className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-muted-foreground">
              Yes, you can cancel your subscription at any time. If you cancel, you'll still have access until the end
              of your billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Is there a free trial?</h3>
            <p className="text-muted-foreground">
              We offer a 7-day free trial for new users. You can explore all premium features before committing to a
              subscription.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              If you're not satisfied with your subscription, you can request a refund within 14 days of your initial
              purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
