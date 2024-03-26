import { Connect } from "@/database/config";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

Connect();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { email, username, password } = body;

    if (!email || !username || !password) {
      return NextResponse.json("Email, Username and Password is required", {
        status: 401,
      });
    }

    const user = await User.findOne({ username });
    if (user) {
      return NextResponse.json("Username already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json("User saved successfully", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};