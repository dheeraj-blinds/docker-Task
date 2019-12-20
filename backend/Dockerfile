FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app 

COPY *.sln .
COPY backend/*.csproj ./backend/
RUN dotnet restore

COPY backend/. ./backend
WORKDIR /app/backend
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
WORKDIR /app
COPY --from=build /app/backend/out ./
ENTRYPOINT ["dotnet", "backend.dll"]
