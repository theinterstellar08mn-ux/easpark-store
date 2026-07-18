import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function CategoryCard({ name, image, to, index }: { name: string; image: string; to: string; index: number }) {
  return <Link to={to} className="group relative h-72 overflow-hidden text-left sm:h-96"><img src={image} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5" /><div className="absolute bottom-0 left-0 p-6 text-white"><span className="text-xs font-bold uppercase tracking-[.18em] text-[#ff8b38]">0{index}</span><h3 className="mt-2 text-2xl font-black tracking-tight">{name}</h3><span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">Discover <ArrowRight size={15} /></span></div></Link>;
}
