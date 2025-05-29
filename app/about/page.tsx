import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Butler AI</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Our mission is to empower seniors with technology through friendly, patient assistance.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Butler AI was born from a simple observation: while technology advances rapidly, many seniors feel left
                behind and isolated from its benefits.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder witnessed firsthand how his grandmother struggled to use her new smartphone to video call
                her grandchildren. Despite her eagerness to connect, the technology barrier seemed insurmountable.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                That's when the idea for Butler AI emerged – an assistant specifically designed for seniors that
                explains technology in simple terms, with endless patience and no judgment.
              </p>
              <p className="text-lg text-gray-700">
                Today, Butler AI helps thousands of seniors confidently navigate the digital world, connecting them with
                loved ones and opening up new possibilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Patience</h3>
                <p className="text-lg text-gray-700">
                  We believe learning takes time. Butler provides unlimited patience, explaining concepts as many times
                  as needed without frustration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Simplicity</h3>
                <p className="text-lg text-gray-700">
                  Technology should be accessible to everyone. We explain complex concepts in plain, understandable
                  language.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Respect</h3>
                <p className="text-lg text-gray-700">
                  We honor the wisdom and experience of seniors while helping them navigate new technologies with
                  dignity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connection</h3>
                <p className="text-lg text-gray-700">
                  We believe technology should bring people together, not create barriers. Butler helps maintain
                  meaningful connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Avatar className="w-32 h-32 mx-auto mb-6">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="CEO" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">John Smith</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-gray-700">
                  Passionate about making technology accessible to everyone, regardless of age.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Avatar className="w-32 h-32 mx-auto mb-6">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="CTO" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-700">
                  Expert in AI and natural language processing with a focus on accessibility.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Avatar className="w-32 h-32 mx-auto mb-6">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Head of Design" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Michael Chen</h3>
                <p className="text-gray-600 mb-4">Head of Design</p>
                <p className="text-gray-700">
                  Specializes in creating simple, intuitive interfaces for users of all ages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-700 mb-10">
            Experience how Butler AI can help you navigate technology with confidence.
          </p>
          <CTAButton text="Try Butler Today" href="/auth/sign-up" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
