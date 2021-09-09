import Nav from '../../components/Nav'
import PostPrincipal from '../../components/PostPrincipal'
import Head from 'next/head';
import Layout from './../../components/Layout/Layout';

export default function index() {
    return (
        <Layout>
        
            <h1>Home</h1>
            <Nav/>
            <PostPrincipal/>
        </Layout>
    )
}
