const {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} = require("@/components/ui/form");
import { Input } from "@/components/ui/input";

export function SocialMediaField({
  form,
  name,
  label,
  icon: Icon,
  placeholder,
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>
              <Icon className="text-3xl" />
            </FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

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

export const ImageUpload = ({
  form,
  name,
  label,
  description,
  preview,
  setPreview,
}) => {
  // const [preview, setPreview] = useState(null);

  const getImageData = (event) => {
    try {
      const files = event.target.files;
      const displayUrl = URL.createObjectURL(files[0]);
      return { files, displayUrl };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { onChange, value, ...rest } }) => (
        <>
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="flex">
                <label
                  htmlFor={`${name}_input`}
                  className="aspect-square w-32 overflow-hidden rounded-lg cursor-pointer">
                  {preview === null ? (
                    <div className="h-full w-full bg-muted grid p-2 place-items-center">
                      Add Logo
                    </div>
                  ) : (
                    <img
                      src={preview}
                      className="w-full h-full"
                      alt="Circle Preview"
                    />
                  )}
                </label>
                <Input
                  id={`${name}_input`}
                  type="file"
                  {...rest}
                  onChange={(event, err) => {
                    console.log(err);
                    const { files, displayUrl } = getImageData(event);
                    setPreview(displayUrl);
                    onChange(files);
                  }}
                  className="hidden"
                />
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
};
