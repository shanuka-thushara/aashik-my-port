"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, certifications } from "@/data/education";
import { Award, GraduationCap } from "lucide-react";

export function Education() {
 return (
  <Section id="education" className="bg-muted/50">
   <div className="space-y-16">
    {/* Education Timeline */}
    <div className="space-y-8">
     <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
       My academic background and qualifications.
      </p>
     </div>

     <div className="max-w-3xl mx-auto space-y-8">
      {education.map((edu, index) => (
       <div key={index} className="flex gap-4 md:gap-8">
        <div className="flex flex-col items-center">
         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <GraduationCap className="h-5 w-5 text-primary" />
         </div>
         {index !== education.length - 1 && (
          <div className="w-px h-full bg-border my-2" />
         )}
        </div>
        <div className="pb-8">
         <h3 className="text-xl font-bold">{edu.degree}</h3>
         <p className="text-primary font-medium">{edu.institution}</p>
         <p className="text-muted-foreground mt-2">{edu.highlight}</p>
        </div>
       </div>
      ))}
     </div>
    </div>

    {/* Certifications Grid */}
    <div className="space-y-8">
     <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
       Continuous learning and professional development.
      </p>
     </div>

     <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {certifications.map((cert, index) => (
       <Card key={index} className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
         <div className="p-2 bg-primary/10 rounded-md shrink-0">
          <Award className="h-5 w-5 text-primary" />
         </div>
         <div>
          <CardTitle className="text-lg leading-tight mb-1">
           {cert.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground font-medium">
           {cert.issuer}
          </p>
         </div>
        </CardHeader>
        <CardContent>
         <p className="text-sm text-muted-foreground">
          {cert.highlight}
         </p>
        </CardContent>
       </Card>
      ))}
     </div>
    </div>
   </div>
  </Section>
 );
}
