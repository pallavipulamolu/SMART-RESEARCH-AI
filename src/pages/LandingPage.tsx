import { ArrowRight, Search, Upload, FileText, Sparkles, CheckCircle, X, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStartResearching = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Smart Research Assistant</h1>
            </div>
            <Button variant="outline" onClick={handleStartResearching}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Smart Research
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Assistant</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              An AI-powered tool that helps students, teachers, and startups save time by providing 
              reliable, evidence-based research reports with citations.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-hero text-white shadow-research-xl hover:shadow-research-xl px-8 py-6 text-lg"
              onClick={handleStartResearching}
            >
              Start Researching
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why existing tools fail?
              </h2>
              <p className="text-lg text-muted-foreground">
                Current research tools leave gaps that slow down your work
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-destructive">
                    <X className="h-6 w-6" />
                    Search Engines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Search engines return links, not answers. You waste time clicking through 
                    multiple sources to find what you need.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-warning/20 bg-warning/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-warning">
                    <Clock className="h-6 w-6" />
                    Chatbots
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Chatbots only handle one file at a time. Complex research requires 
                    analyzing multiple documents simultaneously.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-destructive">
                    <AlertTriangle className="h-6 w-6" />
                    Summarizers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Summarizers skip citations, so results can't be trusted. Without proper 
                    references, your work lacks credibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Smart Research Assistant does:
              </h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive solution for modern research needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-accent/20 hover:shadow-research-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Upload className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Multiple Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Upload multiple PDFs or documents simultaneously for comprehensive analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-research-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Any Question</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ask any research question and get intelligent, contextual answers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:shadow-research-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Structured Answers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get short, structured answers with proper citations you can trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-research-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Live Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Updated continuously with live news and blogs for current insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Perfect for researchers at every level
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Students</h3>
                <p className="text-muted-foreground">
                  Research faster, cite properly, get better grades
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Teachers</h3>
                <p className="text-muted-foreground">
                  Prepare lessons, verify sources, create materials
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Startups</h3>
                <p className="text-muted-foreground">
                  Market research, competitive analysis, trend insights
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-hero text-white shadow-research-xl hover:shadow-research-xl px-12 py-6 text-lg"
              onClick={handleStartResearching}
            >
              Start Researching →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Smart Research Assistant. Built for better research.
          </p>
        </div>
      </footer>
    </div>
  );
}