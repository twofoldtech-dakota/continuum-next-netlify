import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import React, { useEffect, useState } from "react";

export default function Home() {
    const hello = async () => {
        try {
            const res = await fetch("/.netlify/functions/hello");
            console.log(res.json());
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        hello();
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
            </main>

            <Footer />
        </div>
    );
}
