import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Home, User, FolderOpen, Cpu, PenLine, Hammer, Radio, Mail } from "lucide-react";

const commands = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: User },
  { label: "Projects", path: "/projects", icon: FolderOpen },
  { label: "Systems", path: "/systems", icon: Cpu },
  { label: "Writing", path: "/writing", icon: PenLine },
  { label: "Builds", path: "/builds", icon: Hammer },
  { label: "Now", path: "/now", icon: Radio },
  { label: "Contact", path: "/contact", icon: Mail },
];

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Navigate to..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {commands.map((cmd) => (
            <CommandItem
              key={cmd.path}
              onSelect={() => {
                navigate(cmd.path);
                onOpenChange(false);
              }}
            >
              <cmd.icon className="mr-2 h-4 w-4" />
              {cmd.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;
