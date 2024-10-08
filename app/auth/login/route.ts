import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(req: NextRequest) {
    const url = new URL(req.url);
    const cookieStore = cookies();
    const formData = await req.formData();
    
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;


    if (!email || !password) {
        return NextResponse.json(
            { error: "Email and password are required" },
            { status: 400 }
        );
    }


    const supabase = createRouteHandlerClient({
        cookies: () => cookieStore,
    });

    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.redirect(url.origin, {
        status: 302,
    });
}