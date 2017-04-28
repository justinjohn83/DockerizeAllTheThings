#!/bin/bash

echo "Building angular app..."
pushd .
cd angular/product-portal && ng build --aot
popd

echo "Building .NET app..."
pushd .
cd aspnet && dotnet build && dotnet publish
popd

echo "Building Java app..."
pushd .
cd java && ./gradlew installDist
popd
