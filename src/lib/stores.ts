export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  hours: string;
  services: string[];
  rating: number;
  reviews: number;
  lat: number;
  lng: number;
}

export const storeLocations: StoreLocation[] = [
  { id: "s1", name: "AutoParts Hub - Mumbai West", address: "123, Linking Road, Bandra West", city: "Mumbai", state: "Maharashtra", pincode: "400050", phone: "+91 22 4567 8901", hours: "9:00 AM - 9:00 PM", services: ["Installation", "Free Checkup", "Oil Change", "Wheel Alignment"], rating: 4.7, reviews: 1245, lat: 19.0596, lng: 72.8295 },
  { id: "s2", name: "AutoParts Hub - Delhi NCR", address: "45, MG Road, Connaught Place", city: "New Delhi", state: "Delhi", pincode: "110001", phone: "+91 11 2345 6789", hours: "9:00 AM - 9:00 PM", services: ["Installation", "Free Checkup", "AC Service", "Denting"], rating: 4.6, reviews: 987, lat: 28.6315, lng: 77.2167 },
  { id: "s3", name: "AutoParts Hub - Bangalore", address: "78, Brigade Road", city: "Bangalore", state: "Karnataka", pincode: "560001", phone: "+91 80 6789 0123", hours: "9:00 AM - 8:00 PM", services: ["Installation", "Free Checkup", "Battery Service", "Detailing"], rating: 4.8, reviews: 876, lat: 12.9716, lng: 77.5946 },
  { id: "s4", name: "AutoParts Hub - Chennai", address: "90, Anna Salai", city: "Chennai", state: "Tamil Nadu", pincode: "600002", phone: "+91 44 8901 2345", hours: "9:30 AM - 8:30 PM", services: ["Installation", "Free Checkup", "Paint Protection", "Ceramic Coating"], rating: 4.5, reviews: 654, lat: 13.0827, lng: 80.2707 },
  { id: "s5", name: "AutoParts Hub - Pune", address: "23, FC Road, Shivajinagar", city: "Pune", state: "Maharashtra", pincode: "411005", phone: "+91 20 3456 7890", hours: "9:00 AM - 9:00 PM", services: ["Installation", "Free Checkup", "Suspension Tune", "Exhaust Mods"], rating: 4.7, reviews: 543, lat: 18.5204, lng: 73.8567 },
  { id: "s6", name: "AutoParts Hub - Hyderabad", address: "56, Banjara Hills Road No. 1", city: "Hyderabad", state: "Telangana", pincode: "500034", phone: "+91 40 7890 1234", hours: "9:00 AM - 8:00 PM", services: ["Installation", "Free Checkup", "ECU Remap", "Dyno Testing"], rating: 4.6, reviews: 432, lat: 17.385, lng: 78.4867 },
  { id: "s7", name: "AutoParts Hub - Kolkata", address: "12, Park Street", city: "Kolkata", state: "West Bengal", pincode: "700016", phone: "+91 33 4567 8901", hours: "10:00 AM - 8:00 PM", services: ["Installation", "Free Checkup", "Rust Proofing", "Underbody Coat"], rating: 4.4, reviews: 321, lat: 22.5726, lng: 88.3639 },
  { id: "s8", name: "AutoParts Hub - Ahmedabad", address: "34, CG Road, Navrangpura", city: "Ahmedabad", state: "Gujarat", pincode: "380009", phone: "+91 79 5678 9012", hours: "9:00 AM - 9:00 PM", services: ["Installation", "Free Checkup", "PPF Installation", "Tinting"], rating: 4.5, reviews: 234, lat: 23.0225, lng: 72.5714 },
];
