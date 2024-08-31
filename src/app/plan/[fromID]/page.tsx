import { Plan } from "~/components/plan/plan";
import { getCollegeInfo } from "~/lib/data";

export async function generateStaticParams(){
    const { communityColleges } = await getCollegeInfo() 
    
    return Array.from(communityColleges.keys()).map(v=>({
        fromID: v.toString()
    }))
}

export default async function PlanPage({ params }: { params: { fromID: string } }) {

    const { transferColleges, communityColleges } = await getCollegeInfo()
    const transferCollegeMap = new Map(transferColleges)
    const communityCollegeMap = new Map(communityColleges)
    return (
        <main className="h-full">
           <Plan transferColleges={transferCollegeMap} communityColleges={communityCollegeMap}
                homeID={Number(params.fromID)}
            />
        </main>
    )
}