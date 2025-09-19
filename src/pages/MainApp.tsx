import { useState } from "react";
import { Upload, Search, Sparkles, FileText, Plus, RefreshCw, AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function MainApp() {
  const [researchQuery, setResearchQuery] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  // Mock data for results
  const mockResults = {
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
    liveUpdateAvailable: true
  };

  const usageStats = {
    questionsAsked: 3,
    reportsGenerated: 2,
    creditsUsed: 3,
    creditsRemaining: 47
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleGenerateReport = async () => {
    if (!researchQuery.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setHasResults(true);
    }, 3000);
  };

  const handleRefreshReport = () => {
    // Simulate refreshing with live data
    console.log("Refreshing report with latest data...");
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Research Assistant</h1>
          <p className="text-muted-foreground">
            Upload documents and ask questions to generate comprehensive research reports
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section 1: File Upload */}
            <Card className="shadow-research-md border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  Upload Documents
                </CardTitle>
                <CardDescription>
                  Upload multiple PDFs or documents for analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center bg-primary/5 hover:bg-primary/10 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Upload className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          Drop files here or click to upload
                        </p>
                        <p className="text-sm text-muted-foreground">
                          PDF, DOC, DOCX files up to 20MB each
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                  </label>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      Uploaded Files ({uploadedFiles.length})
                    </p>
                    <div className="grid gap-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg border"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-destructive hover:text-destructive"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Section 2: Research Question */}
            <Card className="shadow-research-md border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Research Question
                </CardTitle>
                <CardDescription>
                  Ask any question about your uploaded documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    placeholder="What would you like to research? e.g., 'What are the latest trends in renewable energy?'"
                    value={researchQuery}
                    onChange={(e) => setResearchQuery(e.target.value)}
                    className="text-lg h-14 pr-12 shadow-research-sm"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>

                <Button
                  size="lg"
                  onClick={handleGenerateReport}
                  disabled={!researchQuery.trim() || isGenerating}
                  className="w-full bg-gradient-hero text-white"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                      Generating Report...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Generate Report
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Section 3: Results Display */}
            {hasResults && (
              <div className="space-y-6">
                {/* Live Update Banner */}
                {mockResults.liveUpdateAvailable && (
                  <Card className="border-research-accent/30 bg-research-accent/5">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-research-accent animate-pulse" />
                        <span className="text-sm font-medium text-foreground">
                          New blog update available → Refresh report
                        </span>
                      </div>
                      <Button variant="outline" size="sm" onClick={handleRefreshReport}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Refresh
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Key Takeaways */}
                <Card className="shadow-research-md border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      Key Takeaways
                    </CardTitle>
                    <CardDescription>
                      Main insights from your research question
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {mockResults.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Evidence with Citations */}
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
                      {mockResults.evidence.map((item, index) => (
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

                {/* Final Summary */}
                <Card className="shadow-research-lg border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Sparkles className="h-6 w-6 text-accent" />
                      Final Summary
                    </CardTitle>
                    <CardDescription>
                      Comprehensive analysis of your research findings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-blue max-w-none">
                      <p className="text-foreground leading-relaxed text-lg">
                        {mockResults.summary}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-6 pt-4 border-t border-border/50">
                      <Button variant="outline" size="sm">
                        Download PDF
                      </Button>
                      <Button size="sm">
                        Share Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right Column - Usage Counter */}
          <div className="space-y-6">
            <Card className="shadow-research-md border-primary/10 sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Usage Statistics
                </CardTitle>
                <CardDescription>
                  Track your research activity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{usageStats.questionsAsked}</div>
                    <div className="text-xs text-muted-foreground">Questions Asked</div>
                  </div>
                  <div className="text-center p-3 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{usageStats.reportsGenerated}</div>
                    <div className="text-xs text-muted-foreground">Reports Generated</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Credits Used</span>
                    <span className="font-medium text-foreground">{usageStats.creditsUsed}/50</span>
                  </div>
                  <Progress value={(usageStats.creditsUsed / 50) * 100} className="h-2" />
                  <div className="text-xs text-muted-foreground text-center">
                    {usageStats.creditsRemaining} credits remaining
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" className="w-full">
                    View Billing Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}