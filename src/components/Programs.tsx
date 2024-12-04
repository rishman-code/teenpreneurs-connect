import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Programs = () => {
  const programs = [
    {
      title: "Interactive Courses",
      description: "Learn business fundamentals through hands-on projects and real-world case studies",
      icon: "📚",
    },
    {
      title: "Expert Talks",
      description: "Get inspired by successful entrepreneurs and industry leaders",
      icon: "🎯",
    },
    {
      title: "Networking Events",
      description: "Connect with like-minded peers and build valuable relationships",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{program.icon}</div>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};