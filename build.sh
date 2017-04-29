#!/bin/bash
set -e

echo "Building angular app..."
pushd .
cd angular/product-portal && ng build --aot --prod
popd

echo "Building .NET app..."
pushd .
cd aspnet && dotnet build && dotnet publish
popd

echo "Building Java app..."
pushd .
cd java && ./gradlew installDist
popd
