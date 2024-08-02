import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { getProducts } from "../api/api.js";

const generateSitemap = async () => {
  try {
    // Fetch dynamic product routes
    const response = await getProducts();
    const products = response.data;
    const productUrls = products.map((product) => ({
      url: `/products/${product.product_id}`,
      changefreq: "daily",
      priority: 0.8,
    }));

    // Define static routes
    const staticRoutes = [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/nutritional-plans", changefreq: "daily", priority: 0.8 },
      { url: "/muscle-plans", changefreq: "daily", priority: 0.8 },
      { url: "/about", changefreq: "yearly", priority: 0.5 },
      { url: "/contact", changefreq: "yearly", priority: 0.5 },
      { url: "/checkout", changefreq: "weekly", priority: 0.8 },
    ];

    // Combine static and dynamic routes
    const allRoutes = [...staticRoutes, ...productUrls];

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: "https://angelina-nutritionandworkout.netlify.app",
    });

    // Write each route to the stream
    allRoutes.forEach((route) => {
      stream.write(route);
    });

    // End the stream
    stream.end();

    // Save the sitemap to a file
    const sitemap = await streamToPromise(stream).then((sm) => sm.toString());
    createWriteStream("./public/sitemap.xml").write(sitemap);

    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
