# Next.js Rental Listings Application

## Overview
This Next.js application provides a user interface for browsing and viewing property rental listings. It features pagination, detailed listing views, responsive design, and optimized data fetching.

## Key Features
- **Listing Browser**: View all listings with pagination, sorted by rating  
- **Detailed Listing View**: Click on any listing to see full details  
- **About Page**: Information about the developer with a featured listing  
- **Responsive Design**: Works well on both desktop and mobile devices  
- **Dynamic Routing**: Individual pages for each listing  
- **Server-Side Rendering**: Optimized content loading with Next.js  

## Technical Implementation
The application is built using **Next.js** with **React Bootstrap** for UI components. It uses the following key technologies:

- **Next.js**: For server-side rendering and routing  
- **React Bootstrap**: For responsive UI components  
- **SWR**: For efficient data fetching  
- **CSS Modules**: For component-scoped styling  

## API Integration
The application connects to a **[listings API](https://listings-api-roshis-rai.vercel.app/)** with the following endpoints:

- `GET /api/listings` - Retrieves paginated listings  
- `GET /api/listings/:id` - Retrieves details for a specific listing  

## Components

### **Layout**
- Provides consistent page structure with navigation  

### **MainNav**
- Navigation bar with links to main sections  

### **PageHeader**
- Displays page titles with consistent styling  

### **ListingDetails**
Renders comprehensive information about a listing, including:  
- Property image with fallback  
- Overview description  
- Price, room type, and bed information  
- Ratings and reviews  
- Link to detailed view  

## Pages

### **Home (`index.js`)**
- Paginated view of all listings  
- Accordion display of listing information  
- Alert system for pagination boundaries  

### **About (`about.js`)**
- Information about the developer  
- Featured listing using static generation (`getStaticProps`)  

### **Listing Details (`listing/[id].js`)**
- Dynamic route for individual listing details  
- Complete information about a specific property  

---

This project was created as **Assignment 3** for the **WEB 422** course at **Seneca College**.
