"use client"

import { useState } from "react"
import { Code, Copy, Download, FileCode, Play, Save, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function CodePlaygroundPage() {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Playground</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.5;
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      color: #3b82f6;
    }
    button {
      background-color: #3b82f6;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      cursor: pointer;
    }
    button:hover {
      background-color: #2563eb;
    }
    .counter {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0;
    }
  </style>
</head>
<body>
  <h1>Interactive Counter</h1>
  <p>Click the buttons to increase or decrease the counter.</p>
  <div class="counter" id="counter">0</div>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>
  <button id="reset">Reset</button>

  <script>
    // JavaScript code goes here
    let count = 0;
    const counterElement = document.getElementById('counter');
    
    document.getElementById('increment').addEventListener('click', () => {
      count++;
      counterElement.textContent = count;
    });
    
    document.getElementById('decrement').addEventListener('click', () => {
      count--;
      counterElement.textContent = count;
    });
    
    document.getElementById('reset').addEventListener('click', () => {
      count = 0;
      counterElement.textContent = count;
    });
  </script>
</body>
</html>`)

  const [cssCode, setCssCode] = useState("")
  const [jsCode, setJsCode] = useState("")
  const [output, setOutput] = useState("")
  const [activeTab, setActiveTab] = useState("html")
  const [language, setLanguage] = useState("html")

  // Update output when code changes
  const updateOutput = () => {
    if (language === "html") {
      setOutput(htmlCode)
    } else {
      // For separate HTML/CSS/JS mode
      const combinedCode = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
        </html>
      `
      setOutput(combinedCode)
    }
  }

  const handleRun = () => {
    updateOutput()
  }

  const handleCopy = () => {
    let codeToCopy = ""
    switch (activeTab) {
      case "html":
        codeToCopy = htmlCode
        break
      case "css":
        codeToCopy = cssCode
        break
      case "js":
        codeToCopy = jsCode
        break
      default:
        codeToCopy = htmlCode
    }
    navigator.clipboard.writeText(codeToCopy)
  }

  const handleSave = () => {
    // In a real app, this would save to a database or local storage
    alert("Code saved successfully!")
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    let content = ""
    let filename = ""

    if (language === "html") {
      content = htmlCode
      filename = "playground.html"
    } else {
      // Create a zip file or just download individual files
      content = htmlCode
      filename = "index.html"
    }

    const file = new Blob([content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = filename
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    if (newLanguage === "html") {
      // Combine the separate files into a single HTML file
      const combinedHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}
  <script>
    ${jsCode}
  </script>
</body>
</html>`
      setHtmlCode(combinedHtml)
      setCssCode("")
      setJsCode("")
    } else {
      // Extract HTML, CSS, and JS from the combined file
      try {
        const styleMatch = htmlCode.match(/<style>([\s\S]*?)<\/style>/i)
        const bodyMatch = htmlCode.match(/<body>([\s\S]*?)<\/body>/i)
        const scriptMatch = htmlCode.match(/<script>([\s\S]*?)<\/script>/i)

        if (bodyMatch) {
          // Remove script and style tags from body content
          let bodyContent = bodyMatch[1]
          bodyContent = bodyContent.replace(/<script>[\s\S]*?<\/script>/gi, "")
          bodyContent = bodyContent.replace(/<style>[\s\S]*?<\/style>/gi, "")
          setHtmlCode(bodyContent.trim())
        }

        setCssCode(styleMatch ? styleMatch[1].trim() : "")
        setJsCode(scriptMatch ? scriptMatch[1].trim() : "")
      } catch (error) {
        console.error("Error parsing HTML:", error)
      }
    }
  }

  return (
    <div className="container py-8 md:py-12 flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Code Playground</h1>
        <p className="text-muted-foreground">Write, edit, and test HTML, CSS, and JavaScript code in real-time</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FileCode className="h-4 w-4" />
                {language === "html" ? "HTML" : "HTML/CSS/JS"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Editor Mode</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleLanguageChange("html")}>
                <Code className="mr-2 h-4 w-4" />
                HTML (Single File)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("html-css-js")}>
                <FileCode className="mr-2 h-4 w-4" />
                HTML/CSS/JS (Separate Files)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </Button>
          <Button variant="outline" size="icon" onClick={handleSave}>
            <Save className="h-4 w-4" />
            <span className="sr-only">Save code</span>
          </Button>
          <Button variant="outline" size="icon" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            <span className="sr-only">Download code</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button onClick={handleRun} className="gap-2">
            <Play className="h-4 w-4" />
            Run
          </Button>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex-1 border rounded-lg overflow-hidden">
        <ResizablePanel defaultSize={50} minSize={30}>
          {language === "html" ? (
            <div className="h-full">
              <Textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="h-full font-mono resize-none border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Enter your HTML code here..."
              />
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              <TabsList className="mx-4 mt-2 justify-start">
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
                <TabsTrigger value="js">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="html" className="flex-1 m-0 p-0 data-[state=active]:flex">
                <Textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="h-full font-mono resize-none border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Enter your HTML code here..."
                />
              </TabsContent>
              <TabsContent value="css" className="flex-1 m-0 p-0 data-[state=active]:flex">
                <Textarea
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  className="h-full font-mono resize-none border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Enter your CSS code here..."
                />
              </TabsContent>
              <TabsContent value="js" className="flex-1 m-0 p-0 data-[state=active]:flex">
                <Textarea
                  value={jsCode}
                  onChange={(e) => setJsCode(e.target.value)}
                  className="h-full font-mono resize-none border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Enter your JavaScript code here..."
                />
              </TabsContent>
            </Tabs>
          )}
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full bg-white">
            <iframe
              title="Output"
              srcDoc={output}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
