import { useState } from "react";
import { FileText, Download, Eye, Calendar, Search, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Reports() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data - would come from API
  const reports = [
    {
      id: 1,
      question: "What are the latest trends in renewable energy technology?",
      summary: "Comprehensive analysis of solar, wind, and energy storage innovations with market impact assessment.",
      generatedAt: "2024-01-15T10:30:00Z",
      status: "completed",
      documentsCount: 5,
      keyTakeaways: 5,
      pagesGenerated: 12
    },
    {
      id: 2,
      question: "How is artificial intelligence transforming healthcare?",
      summary: "Deep dive into AI applications in diagnostics, treatment planning, and patient care optimization.",
      generatedAt: "2024-01-12T14:22:00Z",
      status: "completed",
      documentsCount: 8,
      keyTakeaways: 7,
      pagesGenerated: 18
    },
    {
      id: 3,
      question: "What are the economic impacts of remote work policies?",
      summary: "Analysis of productivity, cost savings, and organizational changes in the post-pandemic workplace.",
      generatedAt: "2024-01-10T09:15:00Z",
      status: "completed",
      documentsCount: 3,
      keyTakeaways: 4,
      pagesGenerated: 8
    },
    {
      id: 4,
      question: "Climate change adaptation strategies for coastal cities",
      summary: "Research on infrastructure, policy, and community-based solutions for sea-level rise mitigation.",
      generatedAt: "2024-01-08T16:45:00Z",
      status: "completed",
      documentsCount: 6,
      keyTakeaways: 6,
      pagesGenerated: 15
    },
    {
      id: 5,
      question: "Emerging trends in sustainable agriculture practices",
      summary: "Investigation of precision farming, vertical agriculture, and regenerative farming techniques.",
      generatedAt: "2024-01-05T11:30:00Z",
      status: "completed",
      documentsCount: 4,
      keyTakeaways: 5,
      pagesGenerated: 10
    }
  ];

  const filteredReports = reports.filter(report =>
    report.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewReport = (reportId: number) => {
    console.log("Viewing report:", reportId);
    // Would navigate to detailed report view
  };

  const handleDownloadReport = (reportId: number) => {
    console.log("Downloading report:", reportId);
    // Would trigger download
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports History</h1>
        <p className="text-muted-foreground">
          Access and manage all your generated research reports
        </p>
      </div>

      {/* Search and Filter Bar */}
      <Card className="mb-6 border-primary/10">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reports by question or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports Grid */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <Card key={report.id} className="shadow-research-md border-primary/10 hover:shadow-research-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {report.question}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {report.summary}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="flex-shrink-0">
                  {report.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{report.documentsCount}</div>
                  <div className="text-xs text-muted-foreground">Documents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{report.keyTakeaways}</div>
                  <div className="text-xs text-muted-foreground">Key Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{report.pagesGenerated}</div>
                  <div className="text-xs text-muted-foreground">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">
                    {new Date(report.generatedAt).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Generated</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(report.generatedAt).toLocaleString()}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewReport(report.id)}
                    className="flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => handleDownloadReport(report.id)}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No reports found
            </h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery ? "Try adjusting your search terms" : "Start by generating your first research report"}
            </p>
            <Button variant="hero" asChild>
              <a href="/">Generate New Report</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}