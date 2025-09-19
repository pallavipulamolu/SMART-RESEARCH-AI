import { TrendingUp, FileText, CheckCircle, ExternalLink, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  // Mock data - would come from API
  const currentReport = {
    question: "What are the latest trends in renewable energy technology?",
    keyTakeaways: [
      "Solar panel efficiency has increased by 23% in the past 2 years",
      "Wind energy costs have decreased by 18% globally",
      "Energy storage solutions are becoming more cost-effective",
      "Government incentives are driving adoption in emerging markets",
      "Green hydrogen production is scaling rapidly"
    ],
    evidence: [
      {
        claim: "Solar panel efficiency improvements",
        source: "International Energy Agency Report 2024",
        page: 45,
        confidence: "High"
      },
      {
        claim: "Wind energy cost reduction",
        source: "Global Wind Energy Council Analysis",
        page: 23,
        confidence: "Medium"
      },
      {
        claim: "Energy storage cost trends",
        source: "Bloomberg Energy Storage Outlook",
        page: 67,
        confidence: "High"
      }
    ],
    summary: "The renewable energy sector is experiencing unprecedented growth with significant technological advances across solar, wind, and storage solutions. Cost reductions and efficiency improvements are making renewable energy increasingly competitive with traditional fossil fuels, while government policies worldwide are accelerating adoption rates.",
    status: "completed",
    generatedAt: "2024-01-15T10:30:00Z"
  };

  const usageStats = {
    reportsGenerated: 3,
    creditsUsed: 3,
    creditsRemaining: 47,
    totalCredits: 50
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Research Dashboard</h1>
        <p className="text-muted-foreground">
          View your latest research insights and track your usage
        </p>
      </div>

      {/* Usage Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Reports Generated</CardTitle>
            <div className="text-2xl font-bold text-foreground">{usageStats.reportsGenerated}</div>
          </CardHeader>
        </Card>
        
        <Card className="border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Credits Used</CardTitle>
            <div className="text-2xl font-bold text-foreground">{usageStats.creditsUsed}</div>
          </CardHeader>
        </Card>
        
        <Card className="border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Credits Remaining</CardTitle>
            <div className="text-2xl font-bold text-primary">{usageStats.creditsRemaining}</div>
          </CardHeader>
        </Card>
        
        <Card className="border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Usage Progress</CardTitle>
            <div className="space-y-2">
              <Progress 
                value={(usageStats.creditsUsed / usageStats.totalCredits) * 100} 
                className="h-2"
              />
              <div className="text-xs text-muted-foreground">
                {usageStats.creditsUsed}/{usageStats.totalCredits} credits
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Key Takeaways */}
        <Card className="shadow-research-md border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Key Takeaways
            </CardTitle>
            <CardDescription>
              Main insights from your latest research: "{currentReport.question}"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {currentReport.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{takeaway}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Evidence & Citations */}
        <Card className="shadow-research-md border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Evidence with Citations
            </CardTitle>
            <CardDescription>
              Supporting evidence for key claims
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentReport.evidence.map((item, index) => (
                <div key={index} className="border border-border/50 rounded-lg p-4 bg-secondary/20">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-2">{item.claim}</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.source} (Page {item.page})
                      </p>
                      <Badge 
                        variant={item.confidence === "High" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {item.confidence} Confidence
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final Summary */}
      <Card className="mt-8 shadow-research-lg border-primary/20 bg-gradient-to-r from-primary/5 to-research-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingUp className="h-6 w-6 text-primary" />
            Final Summary
          </CardTitle>
          <CardDescription>
            Comprehensive analysis of your research findings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-blue max-w-none">
            <p className="text-foreground leading-relaxed text-lg">
              {currentReport.summary}
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              Generated on {new Date(currentReport.generatedAt).toLocaleDateString()}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Download PDF
              </Button>
              <Button size="sm">
                Share Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Update Banner */}
      <Card className="mt-6 border-research-accent/20 bg-research-accent/5">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-research-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              New information available for this topic
            </span>
          </div>
          <Button variant="outline" size="sm">
            Refresh Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}