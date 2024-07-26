const {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} = require("@/components/ui/form");
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";

export function ReusableField({
    form,
    name,
    label,
    placeholder,
    component: Component,
}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Component placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export function OptionsField({
    form,
    name,
    label,
    options
}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Combobox
                            frameworks={options}
                            value={field.value}
                            onChange={(selectedValue) => {
                                field.onChange(selectedValue);
                            }}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}