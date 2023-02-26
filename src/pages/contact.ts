import type { APIRoute } from "astro";
import { z } from "astro:content";

export const post: APIRoute = async ({ request }) => {
  const formSchema = z.object({
    message: z
      .string()
      .min(1, { message: "Please enter a message." })
      .max(2000, { message: "Message exceeds the 2000 character limit." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
  });

  type Form = z.infer<typeof formSchema>;
  const body: Form = await request.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const formState = formSchema.safeParse(body);

  if (!formState.success) {
    return new Response(
      JSON.stringify({
        message: "Please validate all form fields.",
      }),
      {
        status: 400,
      }
    );
  } else {
    // handle form submission
    return new Response(
      JSON.stringify({
        message: "Your message was sent successfully.",
      }),
      {
        status: 200,
      }
    );
  }
};
