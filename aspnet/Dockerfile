FROM microsoft/aspnetcore
WORKDIR /app
COPY bin/Debug/netcoreapp1.1/publish /app

#ENV ASPNETCORE_URLS http://*:5000
#EXPOSE 5000

ENTRYPOINT ["dotnet", "aspnet.dll"]
