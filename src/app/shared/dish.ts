// 2. Imported a new class for a new property
import { Comment } from './comment';

// 1. creating a class with properties
export class Dish {
    id: number; // 4. IMPORTANT
    name: string;
    image: string; // nb: string because we will use it as a PATH to our img file
    category: string;
    label: string;
    price: string;
    featured: boolean; // 5. IMPORTANT
    description: string;
    comments: Comment[]; // 3. applied imported class to our new property
}