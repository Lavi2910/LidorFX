import { Button } from "@/components/ui/button";
import logo from "../assets/Logo.png"

export const NavBar = () => {
    return (
        <>
            <header className="flex justify-between px-30 py-3 border-b border-brand-gold-dim/25 bg-brand-ink">
                <div className="h-12 w-12">
                    <img src={logo} alt="לוגו LidorFX"/>
                </div>
                <div className="flex gap-6 font-normal justify-center items-center">
                    <Button asChild className="text-brand-muted font-medium bg-transparent hover:bg-transparent">
                        <a href="#results"><h3>תוצאות</h3></a>
                    </Button>
                    <Button asChild className="text-brand-muted font-medium bg-transparent hover:bg-transparent">
                        <a href="#about"><h3>מי אני</h3></a>
                    </Button>
                    <Button className="text-brand-muted font-medium bg-transparent hover:bg-transparent">
                        <h3>מסלולים</h3>
                    </Button>
                    <Button className="text-brand-muted font-medium bg-transparent hover:bg-transparent">
                        <h3>המלצות</h3>
                    </Button>
                    <Button className="text-brand-ink bg-brand-gold-dim hover:bg-brand-gold rounded-sm px-4 py-2 h-auto font-bold text-center">
                        <h3>להתחיל עכשיו</h3>
                    </Button>
                </div>
            </header>
        </>
    )
}