"use client"

import Image from "next/image"
import { ArrowRight, Home, Truck, Banknote, PackageCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_10%_5%,rgba(125,211,252,0.42),transparent_36%),radial-gradient(ellipse_at_95%_80%,rgba(96,165,250,0.3),transparent_38%),linear-gradient(135deg,#eff8ff_0%,#dceeff_48%,#f7fbff_100%)] py-10 md:py-12 lg:py-8 lg:pb-14">
      <div className="pointer-events-none absolute -left-20 top-20 size-72 rounded-full bg-sky-300/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-blue-400/20 blur-3xl" aria-hidden="true" />
      <div className="relative container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-4 py-2 text-sm shadow-sm backdrop-blur-sm">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-medium text-primary">Vacantes disponibles</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-5xl text-balance">
              Bienvenido a <span className="text-blue-800">BodegasCOL</span>
            </h1>

            <p className="mb-7 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl text-balance">
              Genera ingresos desde la comodidad de tu hogar empacando y organizando productos como{" "}
              <strong className="font-semibold text-slate-950">cosméticos, juguetes, accesorios de cocina</strong>{" "}
              y más. Nosotros nos encargamos de llevarte los productos y recogerlos una vez listos.
            </p>

            <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-lg shadow-blue-900/5 backdrop-blur-sm sm:inline-flex">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Salario semanal
                </p>
                <p className="text-3xl font-bold tracking-tight text-accent md:text-4xl">500 mil pesos</p>
              </div>
              <span className="hidden h-12 w-px bg-border sm:block" aria-hidden="true" />
              <p className="text-sm text-slate-600">Pagos puntuales cada semana</p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Button asChild size="lg" className="bg-blue-800 px-7 text-white shadow-md shadow-blue-900/20 transition-transform hover:-translate-y-0.5 hover:bg-blue-900">
                <Link href="#postularme">
                  Postularme
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <p className="text-sm text-slate-600">Si quieres postularte presiona aquí</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/70 bg-secondary shadow-2xl shadow-primary/10 sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="/packing-woman.png"
                alt="Mujer de cabello rizado empacando productos en su espacio de trabajo en casa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-xs font-semibold text-primary shadow-md backdrop-blur-sm sm:left-6 sm:top-6 sm:text-sm">
                <PackageCheck className="size-4" aria-hidden="true" />
                Empaca desde casa
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-14">
          <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1 sm:p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <Home className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Desde tu casa</p>
              <p className="text-sm text-muted-foreground">Sin traslados</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1 sm:p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <Truck className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Entrega a domicilio</p>
              <p className="text-sm text-muted-foreground">Nosotros llevamos y recogemos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1 sm:p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <Banknote className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Pago semanal</p>
              <p className="text-sm text-muted-foreground">500 mil pesos garantizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
