import { useState } from "react";
import { Upload, Search, Sparkles, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [researchQuery, setResearchQuery] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleGenerateReport = () => {
    // Placeholder for API call
    console.log("Generating report for:", researchQuery, "with files:", uploadedFiles);
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          AI-Powered Research Assistant
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Transform Your Research
          <span className="block text-primary">Into Actionable Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Upload documents, ask intelligent questions, and get comprehensive research reports 
          with citations and key takeaways in seconds.
        </p>
      </div>

      {/* Main Research Interface */}
      <Card className="mb-8 shadow-research-lg border-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Search className="h-6 w-6 text-primary" />
            Start Your Research
          </CardTitle>
          <CardDescription>
            Enter your research question and upload relevant documents to generate an AI-powered analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Research Query Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Research Question
            </label>
            <div className="relative">
              <Input
                placeholder="What would you like to research? e.g., 'What are the latest trends in renewable energy?'"
                value={researchQuery}
                onChange={(e) => setResearchQuery(e.target.value)}
                className="text-lg h-14 pr-12 shadow-research-sm"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">
              Upload Documents (PDF, DOC, DOCX)
            </label>
            
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center bg-primary/5 hover:bg-primary/10 transition-colors">
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      Drop files here or click to upload
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Support for PDF, DOC, and DOCX files up to 20MB each
                    </p>
                  </div>
                  <Button variant="upload" size="lg">
                    <Plus className="h-4 w-4" />
                    Choose Files
                  </Button>
                </div>
              </label>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Uploaded Files ({uploadedFiles.length})
                </p>
                <div className="grid gap-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-secondary rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
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
          </div>

          {/* Generate Report Button */}
          <div className="flex justify-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={handleGenerateReport}
              disabled={!researchQuery.trim()}
              className="px-12 py-6 text-lg"
            >
              <Sparkles className="h-5 w-5" />
              Generate Research Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-primary/10 hover:shadow-research-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Search className="h-5 w-5 text-primary" />
              </div>
              Smart Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AI-powered analysis of your documents with intelligent question answering and insight generation.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10 hover:shadow-research-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              Evidence & Citations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Comprehensive reports with proper citations and evidence backing every claim and insight.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10 hover:shadow-research-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              Key Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Automatically generated bullet points highlighting the most important findings and insights.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}