import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [courses, setCourses] = useState([]);
    const loadCourses = async () => {
        try {
            const res = await fetch('/.netlify/functions/getCourses');
            const courses = await res.json();
            setCourses(courses);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <div className="container">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
                if(courses) {
                    courses.filter((course) => !course.saved)
                    .map((course) => (
                        <p key={course._id}>{course.name}</p>
                        
                    ))
                } else {
                    <p>No Courses Found</p>
                }
            </main>

            <Footer />
        </div>
    );
}
