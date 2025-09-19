import { CreditCard, TrendingUp, Calendar, Zap, Crown, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Billing() {
  // Mock data - would come from API
  const billingData = {
    currentPlan: "Pro",
    creditsTotal: 50,
    creditsUsed: 3,
    creditsRemaining: 47,
    questionsAsked: 3,
    reportsGenerated: 3,
    billingCycle: "monthly",
    nextBillingDate: "2024-02-15",
    currentPeriodStart: "2024-01-15",
    monthlySpend: 29.99
  };

  const usageHistory = [
    { date: "2024-01-15", action: "Report Generated", topic: "Renewable Energy Trends", creditsUsed: 1 },
    { date: "2024-01-12", action: "Report Generated", topic: "AI in Healthcare", creditsUsed: 1 },
    { date: "2024-01-10", action: "Report Generated", topic: "Remote Work Economics", creditsUsed: 1 },
  ];

  const plans = [
    {
      name: "Starter",
      price: 9.99,
      credits: 15,
      features: ["15 research reports", "Basic citations", "Email support"],
      current: false
    },
    {
      name: "Pro",
      price: 29.99,
      credits: 50,
      features: ["50 research reports", "Advanced citations", "Priority support", "Export options"],
      current: true
    },
    {
      name: "Enterprise",
      price: 99.99,
      credits: 200,
      features: ["200 research reports", "Premium features", "Dedicated support", "API access"],
      current: false
    }
  ];

  const creditsPercentage = (billingData.creditsUsed / billingData.creditsTotal) * 100;

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Billing & Usage</h1>
        <p className="text-muted-foreground">
          Manage your subscription and track your research activity
        </p>
      </div>

      {/* Current Plan Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Crown className="h-5 w-5" />
              Current Plan
            </CardTitle>
            <div className="text-2xl font-bold text-foreground">{billingData.currentPlan}</div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              ${billingData.monthlySpend}/month
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Credits Used</CardTitle>
            <div className="text-2xl font-bold text-foreground">
              {billingData.creditsUsed}/{billingData.creditsTotal}
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={creditsPercentage} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Questions Asked</CardTitle>
            <div className="text-2xl font-bold text-foreground">{billingData.questionsAsked}</div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">This billing period</p>
          </CardContent>
        </Card>

        <Card className="border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Reports Generated</CardTitle>
            <div className="text-2xl font-bold text-foreground">{billingData.reportsGenerated}</div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">This billing period</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Usage Details */}
        <Card className="shadow-research-md border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Usage Details
            </CardTitle>
            <CardDescription>
              Your research activity for the current billing period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Credits Remaining</p>
                  <p className="text-sm text-muted-foreground">
                    Resets on {new Date(billingData.nextBillingDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{billingData.creditsRemaining}</div>
                  <div className="text-sm text-muted-foreground">credits</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Recent Activity</h4>
                {usageHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.action}</p>
                      <p className="text-xs text-muted-foreground">{item.topic}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-foreground">-{item.creditsUsed} credit</p>
                      <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Information */}
        <Card className="shadow-research-md border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Billing Information
            </CardTitle>
            <CardDescription>
              Payment details and billing cycle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Next Billing Date</p>
                <p className="text-sm text-muted-foreground">
                  Automatic renewal
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-foreground">
                  {new Date(billingData.nextBillingDate).toLocaleDateString()}
                </div>
                <div className="text-sm text-muted-foreground">${billingData.monthlySpend}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Billing Cycle</span>
                <span className="text-foreground capitalize">{billingData.billingCycle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Period</span>
                <span className="text-foreground">
                  {new Date(billingData.currentPeriodStart).toLocaleDateString()} - {new Date(billingData.nextBillingDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Update Payment Method
              </Button>
              <Button variant="outline" className="w-full">
                Download Invoice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Plans */}
      <Card className="mt-8 shadow-research-lg border-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Available Plans
          </CardTitle>
          <CardDescription>
            Upgrade or downgrade your subscription at any time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${
                  plan.current 
                    ? 'border-primary shadow-research-md bg-gradient-to-b from-primary/5 to-transparent' 
                    : 'border-border/50'
                }`}
              >
                {plan.current && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">
                    Current Plan
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    {plan.name === 'Enterprise' && <Star className="h-5 w-5 text-warning" />}
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-foreground">
                    ${plan.price}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.credits} credits included
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.current ? "outline" : "default"} 
                    className="w-full"
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}