"use server";

export async function createTodo(formData: FormData) {

  try {
    return { message: `Added todo ${formData.keys}` };
  } catch (e) {
    return { message: "Failed to create todo" };
  }
}
