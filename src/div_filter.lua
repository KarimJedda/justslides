function Para(elem)
    local divContent = {}
    for i, el in ipairs(elem.content) do
        table.insert(divContent, el)
        -- Check if the next element is a line break (SoftBreak)
        if elem.content[i+1] and elem.content[i+1].t == "SoftBreak" then
            -- Insert a line break (br) element
            table.insert(divContent, pandoc.RawInline('html', '<br>'))
        end
    end
    return pandoc.Div(divContent)
end

function BulletList(items)
    -- Wrap the entire BulletList in a div
    return pandoc.Div(items)
end

function HorizontalRule()
    -- Remove horizontal rules
    return {}
end

function Figure(elem)
    -- Wrap the entire BulletList in a div
    return pandoc.Div(elem)
end

