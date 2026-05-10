import { div } from "framer-motion/client";
import { CatalogPage } from "./CatalogPage";
import type { CatalogPageId } from "@/config/catalogConfig";
export const CustomPage = () => {
    return <CatalogPage pageId={'custom' satisfies CatalogPageId}></CatalogPage>
}