import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTAButton from "@/components/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            About Butler AI
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-700 md:text-2xl">
            Our mission is to empower seniors with technology through friendly,
            patient assistance.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Our Story
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="mb-6 text-lg text-gray-700">
                Butler AI was born from a simple observation: while technology
                advances rapidly, many seniors feel left behind and isolated
                from its benefits.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                We witnessed firsthand how seniors around us struggle to
                use technology - video calling thier loved ones, for instance. Despite
                eagerness to connect, the technology barrier seemed
                insurmountable.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                That's when the idea for Butler AI emerged – an assistant
                specifically designed for seniors that explains technology in
                simple terms, with endless patience and no judgment.
              </p>
              <p className="text-lg text-gray-700">
                Today, Butler AI aims to help seniors confidently navigate
                the digital world, connecting them with their loved ones effortlessly and opening
                up new possibilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Our Values
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Patience
                </h3>
                <p className="text-lg text-gray-700">
                  We believe learning takes time. Butler provides unlimited
                  patience, explaining concepts as many times as needed without
                  frustration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Simplicity
                </h3>
                <p className="text-lg text-gray-700">
                  Technology should be accessible to everyone. We explain
                  complex concepts in plain, understandable language.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Respect
                </h3>
                <p className="text-lg text-gray-700">
                  We honor the wisdom and experience of seniors while helping
                  them navigate new technologies with dignity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Connection
                </h3>
                <p className="text-lg text-gray-700">
                  We believe technology should bring people together, not create
                  barriers. Butler helps maintain meaningful connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Join Our Community
          </h2>
          <p className="mb-10 text-xl text-gray-700">
            Experience how Butler AI can help you navigate technology with
            confidence.
          </p>
          <CTAButton text="Try Butler Today" href="/auth/sign-up" />
        </div>
      </section>
    </main>
  );
}
