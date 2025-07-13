#!/bin/bash

# Build script for Render.com deployment

echo "Starting build process..."

# Check if we're building backend or frontend
if [ "$RENDER_SERVICE_TYPE" = "web" ] && [ -d "tour-management/backend" ]; then
    echo "Building backend..."
    cd tour-management/backend
    npm install --production
    echo "Backend build completed"
elif [ "$RENDER_SERVICE_TYPE" = "static" ] && [ -d "tour-management/frontend" ]; then
    echo "Building frontend..."
    cd tour-management/frontend
    npm install
    npm run build
    echo "Frontend build completed"
else
    echo "Unknown service type or directory structure"
    exit 1
fi
