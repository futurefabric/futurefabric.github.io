#!/usr/bin/env python3
"""
Simple HTTP server to serve the Three.js files locally.
Run this script and then open http://localhost:8000 in your browser.
"""

import http.server
import socketserver
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow loading GLB files
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def log_message(self, format, *args):
        # Custom log format
        print(f"[{self.address_string()}] {format % args}")

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"\n🚀 Server running at http://localhost:{PORT}/")
        print(f"📁 Serving files from: {os.getcwd()}")
        print(f"🌐 Open http://localhost:{PORT}/index.html in your browser")
        print("\nPress Ctrl+C to stop the server\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Server stopped.")

